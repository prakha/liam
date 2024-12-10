import {
  BaseEdge,
  type Edge,
  type EdgeProps,
  getSmoothStepPath,
} from '@xyflow/react'

import clsx from 'clsx'
import type { FC } from 'react'
import styles from './RelationshipEdge.module.css'

type Data = {
  isHovered: boolean
}

export type RelationshipEdgeType = Edge<Data, 'relationship'>

type Props = EdgeProps<RelationshipEdgeType>

export const RelationshipEdge: FC<Props> = ({
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  id,
  data,
}) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        className={clsx(styles.edge, data?.isHovered && styles.hovered)}
      />
    </>
  )
}
