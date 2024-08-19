import React from 'react'

const Typography = () => {
  return (
    //Fragment
    // <>
    // <React.Fragment key=""> key proeprtysi kullanmamız lazım ama doma da yük bindirmek istemiyorsak Fragment componentini kullnabaliriz. 
    <div>
      <h3 className="text-2xl">Typohraphy</h3>
      <p className="text-sm">Typohraphy</p>
      <p className="text-lg">Typohraphy</p>
      <p className="text-xl">Typohraphy</p>
      <p className="text-3xl">Typohraphy</p>
      <p className="text-4xl">Typohraphy</p>
      <p className="text-6xl">Typohraphy</p>
      <p className="text-[75px]">Typohraphy</p>
      <p className="text-[10rem]">Typohraphy</p>
      <article>
        <p className="line-clamp-4 hover:line-clamp-none">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          nesciunt excepturi iusto alias aperiam optio eveniet. Et laboriosam
          voluptatibus quisquam ducimus, incidunt praesentium, tempora sed esse
          quidem minima aut, fugit laborum? Voluptate nulla natus cupiditate rem
          maiores commodi obcaecati voluptatum cum numquam delectus corporis,
          officia consequatur et fugiat aliquid modi molestiae nam. Esse a
          itaque tempora deleniti ipsam alias quo ducimus culpa doloremque
          consequuntur cumque quaerat optio consequatur quam explicabo tenetur
          excepturi aut, ipsa beatae animi laboriosam nisi. Exercitationem
          veritatis, facilis obcaecati, quam est cupiditate pariatur minus ad
          explicabo voluptatibus nesciunt? Eveniet delectus provident voluptates
          cupiditate beatae. Maxime natus aperiam atque vero eos voluptates,
          repellendus veniam, sit ipsa sapiente ut earum magni expedita
          molestias voluptatem sint quisquam nam dolorum unde ab? Voluptas quas,
          quae perferendis hic veniam dolorem culpa praesentium, totam itaque
          ducimus sint inventore, rem dolor doloribus perspiciatis tempore nulla
          enim vitae dicta? Repellendus placeat tenetur obcaecati excepturi
          magnam?
        </p>
      </article>

      <p className="text-center">Typohraphy</p>
      <p className="underline">Typohraphy</p>
      <p className="line-through">Typohraphy</p>
      <p className="text-red-300">Typohraphy</p>
      <p className="text-green-500">Typohraphy</p>
      <p className="text-6xl text-[rgb(154,200,205)]">Typohraphy</p>
      <p className="text-[#1E0A32]">Typohraphy</p>
      <p className="bg-[#b5a5c5] text-white">Typohraphy</p>
    </div>

// </React.Fragment>
  );
}

export default Typography