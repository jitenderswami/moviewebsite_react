
export default function votecolor(vote_average) {

    let span_class

    if(vote_average >= 8){
        span_class = "green"
    }
    else if(vote_average >= 6){
        span_class = "orange"
    } else {
        span_class = "red"
    }


  return (span_class)
}
