export const Navbar = () => {
  return (
    <div className="absolute top-0 w-screen flex justify-between px-10 py-3">
        <div className="logo">Hello</div>
        <div className="user h-12 w-12 border-2 border-amber-700 rounded-full bg-[url('/profile.jpg')] bg-cover bg-center"></div>
    </div>
  )
}