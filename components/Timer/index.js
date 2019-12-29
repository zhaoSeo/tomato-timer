import { connect } from 'react-redux';
import Timer from './presenter';

function mapStateToProps(state) {
    const { isPlaying, elaspsedTime, timerDuration} = state;
    return {
        isPlaying,
        elaspsedTime,
        timerDuration
    }
}

export default connect(mapStateToProps)(Timer);