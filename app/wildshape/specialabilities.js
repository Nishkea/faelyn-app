export function SpecialAbilities({ special_abilities }) {
    return (
        <div className='flex w-1/2 justify-center items-center flex-col rounded overflow-hidden'>
            {special_abilities.map(special_ability => (
                <div key={special_ability.name} className='w-full p-2 bg-white'>
                    <p className='font-bold'>{special_ability.name}</p>
                    <p>{special_ability.desc}</p>
                </div>
            ))}
        </div>
    )
}
