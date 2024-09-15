/* export const projectInfo = {
  name:'Mastercraft Bamboo Monitor Riser',
  desc:'A beautifully handcrafted monitor stand to reduce neck and eye strain.',
  amountAimed:100000,
  duration:65,
} */
export const headerLinks = ["About", "Discover", "Get Started"];

export type pledgePlan = {
    name:"Bamboo Stand" | "Black Edition Stand" | "Mahogany Special Edition",
    pledgeAmount:number,
    description:string,
    amountInStock:number
}

export const pledgePlans : pledgePlan[] = [
  {
    name: "Bamboo Stand",
    pledgeAmount: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    amountInStock: 101,
  },
  {
    name: "Black Edition Stand",
    pledgeAmount: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    amountInStock: 64,
  },
  {
    name:'Mahogany Special Edition',
        pledgeAmount: 200,
        description:"You get two Special Edition Mahogany stands, a Back T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        amountInStock:0,
  }
];

export const amountAimed = 100000;