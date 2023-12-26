

function Slaider({Images}) {
  return (
    <div className=" overflow-hidden relative">
      <div className=" flex">
      {
        Images.map((img) => <img src={img} alt="item"/>)
      }
      </div>
    </div>
  )
}

export default Slaider
