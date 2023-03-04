const AllMeeetup = ({items}) => {
  return (
    <div>
      {
        items.map(
          (item, i) => 
          <div key={i}>
            <h3>{item.title}</h3>
            <p>
              {item.body}
            </p>
          </div>
        )
      }
    </div>
  )
}

export default AllMeeetup