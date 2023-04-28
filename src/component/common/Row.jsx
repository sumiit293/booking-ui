import PropTypes from 'prop-types';
import imgTrain from "./../../assets/download.png"
const Row = (props) => {
    const { seats } = props;
  return (
    <div className="flex align-top">
        <div className="w-2/6">
            <div>
                <img src={imgTrain} className="mx-auto mt-20 pr-10 sticky top-10" />
                <p className="mt-10 text-center text-gray-500">Mail Express Coach 1</p>
            </div>
        </div>
        <div className="grid grid-cols-7 gap-2 mt-2 w-4/6">
            {Array.isArray(seats) && seats.map((seat)=><div key={seat.seatNumber}>
                {seat.isAvailable ? 
                    <div className="mb-2 py-5 text-center rounded-xl bg-blue-100">
                        <p className="text-gray-600 text-sm">{seat.seatNumber}</p>
                    </div>
                    : 
                    <div className="mb-2 py-5 text-center rounded-xl bg-blue-600">
                        <p className="text-white text-sm">{seat.seatNumber}</p>
                    </div>
                }
            </div>)}
        </div>
    </div>
  )
}

Row.propTypes = {
    seats: PropTypes.array
}

export default Row