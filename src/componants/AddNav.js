
      function AddNav(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
         <div class="container-fluid">
          <a class="navbar-brand" href="Home/">MyPizzaStore</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
        <a class="nav-link" href="/home">Home</a>
        <a class="nav-link" href="/about">About</a>
        <a class="nav-link" href="/addpizza">AddPizza</a>
        <a class="nav-link" href="/pizza-list">PizzaList</a>
        <a class="nav-link" href="/update-pizza">UpdatePizza</a>


      </div>
    </div>
  </div>
</nav>

</>
)

}
export default AddNav;