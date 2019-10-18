/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   }

  class GameObject {
      constructor(attributes) {
          this.createdAt = attributes.createdAt;
          this.name = attributes.name;
          this.dimensions = attributes.dimensions;
      }
        
      destroy() {
          return `${this.name} was removed from the game.`;
      }
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
//   function CharacterStats(childAttributes) {
//     GameObject.call(this, childAttributes);
//     this.healthPoints = childAttributes.healthPoints;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   }
  
  class CharacterStats extends GameObject {
      constructor(childAtts) {
          super(childAtts);
          this.healthPoints = childAtts.healthPoints;
      }
      
      takeDamage() {
          return `${this.name} took damage.`;
      }
  }
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  
  
//   function Humanoid(grandchildAtts) {
//     CharacterStats.call(this, grandchildAtts);
//     this.team = grandchildAtts.team;
//     this.weapons = grandchildAtts.weapons;
//     this.language = grandchildAtts.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   }

  class Humanoid extends CharacterStats {
      constructor(gcAtts) {
        super(gcAtts);
        this.team = gcAtts.team;
        this.weapons = gcAtts.weapons;
        this.language = gcAtts.language;
      }

      greet() {
          return `${this.name} offers a greeting in ${this.language}`;
      }
  }
   
//   function Hero(ggcAtts) {
//     Humanoid.call(this, ggcAtts);
//     this.superPower = ggcAtts.superPower;
//   }
  
//   Hero.prototype = Object.create(Humanoid.prototype);

  class Hero extends Humanoid {
      constructor(ggcAtts) {
          super(ggcAtts);
          this.superPower = ggcAtts.superPower;
      }
  }
  
//   function Villain(ggcAtts) {
//     Humanoid.call(this, ggcAtts);
//     this.superPower = ggcAtts.superPower;
//     this.motive = ggcAtts.motive;
//   }
  
//   Villain.prototype = Object.create(Humanoid.prototype);

  class Villain extends Humanoid {
      constructor(ggcAtts) {
          super(ggcAtts);
          this.superPower = ggcAtts.superPower;
          this.motive = ggcAtts.motive;
      }

      explain() {
          return `${this.name} wants to ${this.motive}.`;
      }
  }
  
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  const batman = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2.6,
      width: 2,
      height: 4.5,
    },
    healthPoints: 50,
    name: 'Batman',
    team: 'good guys',
    weapons: [
      'bat-bombs',
      'The Bat Pod',
    ],
    language: 'English',
    superPower: 'fighting skills',
  })
  
  const joker = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2.2,
      width: 1.8,
      height: 4,
    },
    healthPoints: 50,
    name: 'Joker',
    team: 'bad guys',
    weapons: [
      'exploding cigars',
      'cane',
    ],
    language: 'English',
    superPower: 'deranged mind',
    motive: 'to make people suffer as much as he suffered',
  })
  
  console.log(batman.name);
  console.log(batman.greet());
  
  console.log(joker.weapons);
  console.log(joker.takeDamage());

  console.log(batman.superPower);
  console.log(joker.explain());

  
  
    
