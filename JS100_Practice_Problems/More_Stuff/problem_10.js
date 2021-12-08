let x = "5"
x = x + 1 // => "51"

let y = "5"
y++ // => 5

/*
 Since we are using the ++ operator, JS assumes we want a number instead. However, since it is
 the post increment, we will still get 5 instead of 6. When we call y again, then we will get
 6.
*/