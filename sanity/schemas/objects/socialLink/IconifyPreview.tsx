import { Icon } from '@iconify/react'

interface IconPreviewProps {
  icon: string
}

const IconifyPreview = ({ icon }: IconPreviewProps) => {
  if (!icon) return null

  return (
    <Icon
      icon={icon}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  )
}

export default IconifyPreview
