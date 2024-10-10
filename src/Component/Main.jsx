function Main() {
    return <div>
<div className="bg-green-300 mt-10">

      {/* Main Content */}
      <main className="flex-grow container mx-auto flex flex-col items-center justify-center py-12">
        <section id="home" className="w-full text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-lg">This is a simple Get products</p>
        </section>


        

        <section id="contact" className="w-full text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Eng-Hakimi</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
</div>

    </div>
}

export default Main