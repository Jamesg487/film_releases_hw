const ReleasesButton = () => {

    const handleClick = () => {
        window.open("https://www.imdb.com/calendar/?region=gb");
      };

    return (
        <button onClick={handleClick} className="button">View More Upcoming Releases &rsaquo; </button>
    )
}

export default ReleasesButton;