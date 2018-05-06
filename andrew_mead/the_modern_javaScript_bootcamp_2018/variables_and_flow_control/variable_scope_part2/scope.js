// [ Situation 1 ]
/*
    Global Scope (name)
        Local Scope (name)
            Local Scope
        Local Scope
 */
let name = 'Steven';

if (true) {
  let name = 'Mike';
  if (true) {
    name = 'Jen';
    console.log(name);
  }
}

if (true) {
  console.log(name);
}

// [ Situation 2 ]
/*
    Global Scope ()
        Local Scope ()
            Local Scope
        Local Scope
 */
if (true) {
  if (true) {
    // name2 = 'Jen';
    // 產生一個 var name2 = 'Jen' ===> too bad!!

    let name2 = 'Jen';
    console.log(name2);
  }
}

if (true) {
  console.log(name2);
}
