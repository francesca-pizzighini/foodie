import Navbar from "../components/navbar"

function ErrorPage() {
  return (
    <div className="error">
      <Navbar/>
      
      <div className="safe">
        <h2>An error occurred</h2>
        <h4>Please try to reaload the page</h4>
        <p>If the error persist contact us&nbsp;
          <a 
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScnYfUy9gNezfjjNijBWgBXXLzc1q0F6JuZMmJFQC9Uh4XVlw/viewform?usp=sf_link"
          >here</a>
        </p>

        </div>
    </div>
  )
}

export default ErrorPage;
