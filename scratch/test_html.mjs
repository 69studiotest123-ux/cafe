async function test() {
  const res = await fetch("http://localhost:3000");
  const html = await res.text();

  console.log("Status:", res.status);
  console.log("Title match:", html.match(/<title>(.*?)<\/title>/)?.[1]);
  console.log("Meta description match:", html.match(/name="description" content="(.*?)"/)?.[1]);
  console.log("Contains Address 29, Thimbirigasyaya Place:", html.includes("29, Thimbirigasyaya Place"));
  console.log("Contains Instagram @berucafe.lk:", html.includes("@berucafe.lk"));
  console.log("Contains Hours 8:00 AM – 5:30 PM:", html.includes("8:00 AM – 5:30 PM"));
  console.log("Contains LocalBusiness schema:", html.includes("CafeOrCoffeeShop"));

  const menuRes = await fetch("http://localhost:3000/menu");
  const menuHtml = await menuRes.text();
  console.log("Menu Status:", menuRes.status);
  console.log("Menu contains Signature Breakfast Bowl:", menuHtml.includes("Signature Breakfast Bowl"));
}

test();
