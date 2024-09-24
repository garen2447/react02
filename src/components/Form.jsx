

function Form ()   {
  
    return (
        <header>

           
            <form>
            <h2 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>Contact form</h2>
            <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">

            <div className="row mb-3">

  <div className="col">
    <input
      type="text"
      className="form-control"
      placeholder="First name"
      aria-label="First name"
    />
  </div>
  <div className="col">
    <input
      type="text"
      className="form-control"
      placeholder="Last name"
      aria-label="Last name"
    />
  </div>
</div>


<div className="row mb-3">
  <div className="col">
    <input
      type="email"
      className="form-control"
      placeholder="Email"
      aria-label="Email"
    />
  </div>
  <div className="col">
    <input
      type="tel"
      className="form-control"
      placeholder="Phone"
      aria-label="Phone"
    />
  </div>
</div>

<div className="row mb-3">
  <div className="col">
    <input
      type="password"
      className="form-control"
      placeholder="Password"
      aria-label="Password"
    />
  </div>
  <div className="col">
    <input
      type="password"
      className="form-control"
      placeholder="Confirm Password"
      aria-label="Confirm Password"
    />
  </div>
</div>

      <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
      </div>
      </div>
    </form>
        </header>


    );
}

export default Form;