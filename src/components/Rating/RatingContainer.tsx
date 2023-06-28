import React, {useState} from 'react';
import ControlledRating, {RatingValueType} from "./ControlledRating";
import UncontrolledRating from "./UncontrolledRating";
import s from './RatingContainer.module.css'

export const RatingContainer = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div>Press on Star to set Rating
            <div className={s.rating}>
                Controlled Rating <ControlledRating value={ratingValue} onClick={setRatingValue}/>
            </div>
            <div>
                UnControlled Rating <UncontrolledRating/>
            </div>
        </div>
    )
}