// Getter and setter
// Getter and setter are used to get and set the value of an object property.
//  they are different ways to use this method.
// 1.using class
 class user {
        constructor(name, email){
            this._name = name;
            this._email = email;
        }
        get name(){
            return this._name.toUpperCase();
        }
        set name(value){
            this._name = value;
        }
        get email(){
            return this._email.toUpperCase()
        }
        set email(value){
            this._email = value;
        }
 }
   const username= new user('sakib','samanvith123@amazon.com');
    console.log(username.name);
   console.log(username.email);


// 2.using functions with prototype
 function  User(name,email){
    this._name = name;
    this._email = email;
    Object.defineProperty(this,'name',
      {
         get :function(){
                return this._name.toUpperCase();
         },
         set : function(value){
                this._name = value;
         }
      })
      Object.defineProperty(this,'email',
      {
            get :function(){
                    return this._email.toUpperCase();
            },
            set : function(value){
                    this._email = value;
            }
      })

 }
  const newuser = new User('sakib','samanvith@google.com');
//   console.log(newuser.name);

//   console.log(newuser.email);
 
// 3. using object
    const user1 = {
        _name : 'sakib',
        _email : 'Samanvith2005@gmail.com',
    
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    },
    get name(){
        return this._name.toUpperCase();
    },
    set name(value){
        this._name = value;

}
    }
const newuser1= Object.create(user1);
//  console.log(newuser1.email);
//   console.log(newuser1.name);


// let us undertand Behind the scene
//  when you access a getter, the associated function is executed, and when you use a setter, the assigned value is passed to the setter function
// getters and setters enhance the control, security, and maintainability of your code by allowing you to manage the access and modification of object properties.