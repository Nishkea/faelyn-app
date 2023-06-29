export function SkillMatrix({ strength, dexterity, constitution, intelligence, wisdom, charisma }) {
    return (
        <div className='flex w-1/2 justify-center items-center flex-col rounded overflow-hidden'>
            <p className='w-full p-2 bg-slate-300'>Strength: {formatSkill(strength)}</p>
            <p className='w-full p-2 bg-white'>Dexterity: {formatSkill(dexterity)}</p>
            <p className='w-full p-2 bg-slate-300'>Constitution: {formatSkill(constitution)}</p>
            <p className='w-full p-2 bg-white'>Intelligence: {formatSkill(intelligence)}</p>
            <p className='w-full p-2 bg-slate-300'>Wisdom: {formatSkill(wisdom)}</p>
            <p className='w-full p-2 bg-white'>Charisma: {formatSkill(charisma)}</p>
        </div>
    )
    function formatSkill(skill) {
        return `${skill} (${Math.floor((skill - 10) / 2)})`
    }
}