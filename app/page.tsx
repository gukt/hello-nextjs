import Form from "next/form";
import Image from "next/image";

export default function Page() {
  return (
    <Form action="/search">
      <input name="query" />
      <button type="submit">Submit</button>
    </Form>
  )
}

// export default function Page() {
//   return (
//     <h1>
//       Hello, Next.js!
//       <p>This is a paragraph</p>
//       <Image
//         src="/file.svg"
//         width={100}
//         height={100}
//         alt="file"
//       />
//     </h1>
//   );
// }