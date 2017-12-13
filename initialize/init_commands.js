db.createCollection('contact_info');
db.createCollection('blockquotes');
db.createCollection('location');

db.blockquotes.insert({
    "quote": "Chef Lado Dennis serves an inventive and highly-personal eclectic style of cuisine. Paragon walks a line between sophisticated and casual — no tablecloths here, and it’s the sort of space that can cover a glass of wine and a small bite just as well as a full meal.",
    "citation": "Eater NY"
  });

db.contact_info.insert({
  method: 'phone',
  value: {
    countryCode: "1",
    areaCode: "718",
    localNumber: "555-9382"
  }
});
db.contact_info.insert({
  method: 'email',
  value: 'hello@paragon.com'
});
