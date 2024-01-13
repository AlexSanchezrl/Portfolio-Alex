

function Footer() {

  const date = new Date().getFullYear();
  return (
    <>
    
    <footer className="w-full h-32 bg-divs p-4 mt-14 bottom-0">

    <div className="text-center font-forAll text-white p-2">

      <h5>Portfolio created by Alexander Sanchez</h5>
      <h5>Text me at: <span className="text-color-h">alexander.snchz07@gmail.com</span></h5>
      <h5>© {date}</h5>

    </div>

    </footer>
    
    </>
  )
}

export default Footer