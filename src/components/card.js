const card = () => {
    let url = ""
    return(
        <figure className="w-full rounded-md p-5 shadow-xl hover:bg-white">
            <img className="w-full" src={url} />
            <figcaption className="w-full row mt-2">
                <div className="col-md-9">
                    <p>Lorem Ipsum </p>
                    <p>$ 78983 COP</p>
                </div>
                <img className="col-md-3" src="" />
            </figcaption>
        </figure>
    );
}

export default card;