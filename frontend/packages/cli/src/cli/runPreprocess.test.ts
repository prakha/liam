import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import type { SupportedFormat } from '@liam-hq/db-structure/parser'
import { describe, expect, it } from 'vitest'
import { runPreprocess } from './runPreprocess.js'

describe('runPreprocess', () => {
  const testCases = [
    {
      format: 'postgres',
      inputFilename: 'input.sql',
      content: 'CREATE TABLE test (id INT, name VARCHAR(255));',
    },
    {
      format: 'schemarb',
      inputFilename: 'input.schema.rb',
      content: `
        create_table "test" do |t|
          t.integer "id"
          t.string "name", limit: 255
        end
      `,
    },
  ]

  it.each(testCases)(
    'should create schema.json with the content in $format format',
    async ({ format, inputFilename, content }) => {
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'test-distDir-'))
      const inputPath = path.join(tmpDir, inputFilename)

      fs.writeFileSync(inputPath, content, 'utf8')

      const outputFilePath = await runPreprocess(
        inputPath,
        tmpDir,
        format as SupportedFormat,
      )
      if (!outputFilePath) throw new Error('Failed to run preprocess')

      expect(fs.existsSync(outputFilePath)).toBe(true)

      // Validate output file content
      const outputContent = JSON.parse(fs.readFileSync(outputFilePath, 'utf8'))
      expect(outputContent.tables).toBeDefined()
    },
  )

  it('should throw an error if the input file does not exist', async () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'test-distDir-'))
    const nonExistentPath = path.join(tmpDir, 'non-existent.sql')

    await expect(
      runPreprocess(nonExistentPath, tmpDir, 'postgres'),
    ).rejects.toThrow('Invalid input path. Please provide a valid file.')
  })

  it('should throw an error if the format is invalid', async () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'test-distDir-'))
    const inputPath = path.join(tmpDir, 'input.sql')
    fs.writeFileSync(
      inputPath,
      'CREATE TABLE test (id INT, name VARCHAR(255));',
      'utf8',
    )

    await expect(
      runPreprocess(inputPath, tmpDir, 'invalid' as SupportedFormat),
    ).rejects.toThrow('Invalid format')
  })
})
