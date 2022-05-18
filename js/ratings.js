let collect_ratings = () => {
    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    };
    let rating = 0;
    let elements = document.querySelectorAll(".rating");
    rating = elements.forEach(element => element.id.replace('star',''));
    rating.parsInt();
    // console.log("ee",elements);
}