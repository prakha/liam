import { getOrganizationInfo } from '@liam-hq/github'
import { ProjectIcon } from '@liam-hq/ui'
import Image from 'next/image'
import styles from './ProjectItem.module.css'

interface OrganizationIconProps {
  installationId: number
  owner: string
  repo: string
}

export async function OrganizationIcon({
  installationId,
  owner,
  repo,
}: OrganizationIconProps) {
  try {
    const orgInfo = await getOrganizationInfo(installationId, owner, repo)

    if (orgInfo?.avatar_url) {
      return (
        <Image
          src={orgInfo.avatar_url}
          alt={`${owner} organization icon`}
          width={32}
          height={32}
          className={styles.icon}
        />
      )
    }
  } catch (error) {
    console.error('Failed to fetch organization info:', error)
  }

  return <ProjectIcon className={styles.icon} />
}
