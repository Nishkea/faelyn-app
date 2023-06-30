import { SkillMatrix } from './skillmatrix'
import { Basics } from './basics'
import { Actions } from './actions'
import { SpecialAbilities } from './specialabilities'

export function DetailedView({ shape }) {
    const {
        name,
        desc,
        image,
        hit_points,
        size,
        type,
        subtype,
        alignment,
        armor_class,
        hit_dice,
        speed,
        languages,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        challenge_rating,
        actions,
        special_abilities
    } = shape
  return (
    <div className='flex justify-start items-start flex-col gap-5'>
        <div className='flex items-start justify-center gap-2'>
            <p className='font-bold text-2xl text-white'>{name}</p>
            {(type == 'beast' || type == 'elemental') && <div className='p-2 rounded text-sm text-white uppercase font-bold bg-green-400'>wildshapable</div> }
        </div>

        {desc && <p className='text-white'>{desc}</p>}
        <p className='text-lg font-bold p-2 bg-white rounded'>HP: {hit_points}</p>
        <h2 className='text-white text-xl font-medium'>Details</h2>
        <div className='w-full flex gap-2 justify-start items-start'>
            <Basics {...{ challenge_rating, speed, armor_class, type, size, subtype, alignment, hit_dice, languages }} />
            <SkillMatrix {...{ strength, dexterity, constitution, intelligence, wisdom, charisma }} />
        </div>
        <h2 className='text-white text-xl font-medium'>Actions & special abilities</h2>
        <div className='flex gap-2 items-start'>
            <Actions {...{ actions }} />
            <SpecialAbilities {... {special_abilities }} />
        </div>
    </div>
  )
}
