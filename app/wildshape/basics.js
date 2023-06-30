export function Basics({ challenge_rating, speed, armor_class, type, size, subtype, alignment, hit_dice, languages, damage_vulnerabilities, damage_resistances, damage_immunities, condition_immunities, senses, proficiencies }) {
    return (
        <div className='flex flex-col gap-2 w-1/2'>
            <div className='flex flex-col bg-white p-2 rounded w-full'>
                <div className='flex flex-col'>
                    <p>CR: {challenge_rating}</p>
                    {speed.walk && <p>Speed: {speed.walk} </p>}
                    {speed.swim && <p>Swim: {speed.swim} </p>}
                    {speed.fly && <p>Fly: {speed.fly} </p>}
                    <p>AC: {armor_class[0].value}</p>
                </div>
                <div className='flex flex-col'>
                    <p>Type: {type}</p>
                    <p>Size: {size}</p>
                    {subtype && <p>Subtype: {subtype} </p>}
                </div>
                <div className='flex flex-col'>
                    <p>Alignment: {alignment}</p>
                    {languages && <p>Languages: {languages}</p>}
                    <p>Hit Dice: {hit_dice}</p>
                </div>
            </div>
            <div className='flex flex-col bg-white p-2 rounded w-full'>
                <div className='flex flex-col'>
                    {damage_vulnerabilities && <p>Vulnerabilities: {damage_vulnerabilities}</p>}
                    {damage_resistances && <p>Resistances: {damage_resistances}</p>}
                    {damage_immunities && <p>Immunities: {damage_immunities}</p>}
                    {condition_immunities && <p>Condition Immunities: {condition_immunities.map((condition) => {
                        return `${condition.name} `
                    })} </p>}
                </div>
                <div className='flex flex-col'>
                    {senses && <p>Senses: 
                        {senses.passive_perception && <p>Passive perception: {senses.passive_perception}</p> }
                        {senses.darkvision && <p>Darkvision: {senses.darkvision}</p> }
                    </p>}
                    {proficiencies && <p>Proficiencies: {proficiencies.map(( item ) => <div><p>{item.value}</p><p>{item.proficiency.name}</p></div>)}</p>}
                </div>
            </div>
        </div>
    )
}