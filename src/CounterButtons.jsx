export default function CounterButtons({ onIncrement, onReset, plusButtonRef }) {
    return (
      <div className="button-group">
        <button className="plus" onClick={onIncrement} ref={plusButtonRef}>
          + 1
        </button>
        <button className="reset" onClick={onReset}>
          reset
        </button>
      </div>
    );
  }
