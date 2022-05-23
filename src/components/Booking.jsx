import styles from "./Booking.module.css";

const Booking = () => {
  return (
    <div className={ styles.booking }>
      <form className="container" onSubmit={(e) => e.preventDefault()}>
        <input type="text"/>
        <input type="text"/>
        <select>
          <option value="value1">value 1</option>
        </select>
        <button type="submit">Realizar Reserva</button>
      </form>
    </div>
  )
}

export default Booking;
