import { useRef } from "react"

const Form = () => {
    const passName = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(passName.current.value);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" name="name" id="name" ref={passName} />
                <label htmlFor="post-body">Body</label> <br />
                <textarea name="post-body" id="" cols="30" rows="10"></textarea>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Form