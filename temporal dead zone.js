//   Temporal dead zone

// only in case of let const
/* Using a let variable before it is declared will result in a ReferenceError.
When a variable is declared with let or const, it is hoisted to the top of 
its scope but remains uninitialized within the TDZ. The TDZ starts at the 
beginning of the scope and continues until the point where the variable
 declaration is reached in the code. Any attempt to access or assign
 a value to the variable within the TDZ results in a ReferenceError

   The variable is in a "temporal dead zone" from the start of the block until 
    it is declared:
    ex--  carname ="volvo";
           console.log(carname)
           let carname
           this statement give error but in case of var run and output will be volvo */