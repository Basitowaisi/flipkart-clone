const HeaderLink: React.FC<{
  icon: React.ReactNode
  text: string
  rightIcon?: React.ReactNode
}> = ({ icon, text, rightIcon }) => {
  return (
    <li>
      <a href="#" className="flex items-center gap-1 hover:bg-slate-100/70 p-3">
        {icon}
        <span>{text}</span>
        {rightIcon}
      </a>
    </li>
  )
}

export default HeaderLink
