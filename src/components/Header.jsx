function Header({user, message})   {
    const handleClick = () => {
        alert(message)
    }
    return (
        <header>

            <h2>Skynet</h2>
            <p>Welcome {user ? user : "guest" }</p>
            <button onClick={handleClick}>Enviar</button>
        </header>


    );
}

export default Header;