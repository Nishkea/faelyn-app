export function Basics({ challenge_rating, speed, armor_class, type, size, subtype, alignment, hit_dice }) {
    return (
        <div className='flex flex-col bg-white p-2 rounded w-1/2'>
            <div className='flex flex-col'>
                <p>CR: {challenge_rating}</p>
                {speed.walk && (<p>Speed: {speed.walk} </p>)}
                {speed.swim && (<p>Swim: {speed.swim} </p>)}
                {speed.fly && (<p>Fly: {speed.fly} </p>)}
                <p>AC: {armor_class[0].value}</p>
            </div>
            <div className='flex flex-col'>
                <p>Type: {type}</p>
                <p>Size: {size}</p>
                {subtype && ( <p>Subtype: {subtype} </p>)}
            </div>
            <div className='flex flex-col'>
                <p>Alignment: {alignment}</p>
                <p>Hit Dice: {hit_dice}</p>
            </div>
        </div>
    )
}