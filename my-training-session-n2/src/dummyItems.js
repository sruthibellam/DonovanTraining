// export default function dummyItems()  {
//     return Array.from({ length: 10 }, (_, index) => {
//         const id = Math.random().toString(36).substring(2, 9);
//         const name = `Item ${index + 1}`;
//         const description = `Description for ${name}`;
//         const price = Math.floor(Math.random() * 1000);
//         const volume = Math.floor(Math.random() * 1000);
//         const images = Array.from({ length: 3 }, (_, index) => {
//             return `https://picsum.photos/200/300?random=${id+index}`;
//         });
//         return { id, name, description, price, volume, images };
//     });
// }

export default function dummyItems() {
  return [
    {
      id: "1",
      name: "Item 1",
      description: "Description for Item 1",
      price: 100,
      volume: 200,
      images: [
        "https://picsum.photos/200/300?random=1",
        "https://picsum.photos/200/300?random=2",
        "https://picsum.photos/200/300?random=3",
      ],
    },
    {
      id: "2",
      name: "Item 2",
      description: "Description for Item 2",
      price: 200,
      volume: 300,
      images: [
        "https://picsum.photos/200/300?random=4",
        "https://picsum.photos/200/300?random=5",
        "https://picsum.photos/200/300?random=6",
      ],
    },
  ];
}
//
