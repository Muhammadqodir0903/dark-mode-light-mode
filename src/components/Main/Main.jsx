import React, { useContext } from 'react'
import '../Header/Header.css'
import { Context } from '../../Context/Context'

function Main() {
  const { mode } = useContext(Context)
  return (
    <div className={mode ? "header" : "header2"}>
      <div className="container">
        <div className="main__info">
          <img className='img' src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQsu7yYuRPXNK9eHHSFD2tUYO4stQDb1Ez8vjqGERfs9xqYLLnY_y6lQkPFZa-44cqn" alt="" />
          <h2 className={mode ? "text" : "text2"}>Mona Liza</h2>
          <p className={mode ? "text" : "text2"}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut dolor enim alias quia assumenda, inventore ut nam porro
            adipisci voluptates odit incidunt animi a ipsa eius voluptatibus?
            Sequi harum adipisci natus dolores numquam possimus asperiores inventore,
            mollitia esse quasi pariatur vero amet recusandae in, beatae repellat voluptatem
            voluptatibus nesciunt quod? Vitae illum vel est perferendis eos perspiciatis
            expedita sequi unde veniam dicta deleniti eum, deserunt iusto sapiente
            temporibus laborum iste adipisci aperiam voluptatem nisi molestias ad similique.
            Aliquid dignissimos modi reiciendis voluptate mollitia eveniet possimus ad quas eum
            sequi, expedita consectetur, maxime qui consequuntur, optio nesciunt quibusdam moles
            tias? Cumque ipsum commodi earum fuga neque illum atque impedit quae doloremque debi
            tis nisi, tenetur provident nemo velit adipisci? Dicta incidunt minima, cum eaque ve
            ritatis nihil voluptatibus quam magni blanditiis itaque consequatur odio, tempore qui
            a unde sed architecto eveniet excepturi sit totam ut. Consequuntur, unde adipisci? Sa
            piente adipisci, error veniam quasi iusto facilis dolor expedita ducimus pariatur eum t
            emporibus minus dolorum culpa nemo harum asperiores similique aperiam accusantium, suscipi
            t ratione dolore fugit. Beatae et nulla repellat molestias natus dolorem repellendus quidem
            aliquam, similique voluptatibus quaerat suscipit non ut placeat tempora molestiae dolor fug
            it labore repudiandae! Suscipit sed voluptas dolores laborum beatae tenetur voluptate!</p>
          <hr />
          <img className='img' src="https://paxtachi.uz/sites/default/files/styles/large/public/field/image/06.05%201_1.jpg?itok=o6qDlgpu" alt="" />
          <h2 className={mode ? "text" : "text2"} >Motamsaro Ona</h2>
          <p className={mode ? "text" : "text2"}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut dolor enim alias quia assumenda, inventore ut nam porro
            adipisci voluptates odit incidunt animi a ipsa eius voluptatibus?
            Sequi harum adipisci natus dolores numquam possimus asperiores inventore,
            mollitia esse quasi pariatur vero amet recusandae in, beatae repellat voluptatem
            voluptatibus nesciunt quod? Vitae illum vel est perferendis eos perspiciatis
            expedita sequi unde veniam dicta deleniti eum, deserunt iusto sapiente
            temporibus laborum iste adipisci aperiam voluptatem nisi molestias ad similique.
            Aliquid dignissimos modi reiciendis voluptate mollitia eveniet possimus ad quas eum
            sequi, expedita consectetur, maxime qui consequuntur, optio nesciunt quibusdam moles
            tias? Cumque ipsum commodi earum fuga neque illum atque impedit quae doloremque debi
            tis nisi, tenetur provident nemo velit adipisci? Dicta incidunt minima, cum eaque ve
            ritatis nihil voluptatibus quam magni blanditiis itaque consequatur odio, tempore qui
            a unde sed architecto eveniet excepturi sit totam ut. Consequuntur, unde adipisci? Sa
            piente adipisci, error veniam quasi iusto facilis dolor expedita ducimus pariatur eum t
            emporibus minus dolorum culpa nemo harum asperiores similique aperiam accusantium, suscipi
            t ratione dolore fugit. Beatae et nulla repellat molestias natus dolorem repellendus quidem
            aliquam, similique voluptatibus quaerat suscipit non ut placeat tempora molestiae dolor fug
            it labore repudiandae! Suscipit sed voluptas dolores laborum beatae tenetur voluptate!</p>


        </div>
      </div>
    </div>
  )
}

export default Main