import { SkillMatrix } from './skillmatrix'
import { Basics } from './basics'
import { Actions } from './actions'

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
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        challenge_rating,
        actions
    } = shape
  return (
    <div className='flex justify-start items-start flex-col gap-5'>
        <p className='font-bold text-2xl text-white'>{name}</p>
        {desc && <p className='text-white'>{desc}</p>}
        <p className='text-lg font-bold p-2 bg-white rounded'>HP: {hit_points}</p>
        <h2 className='text-white text-xl font-medium'>Details</h2>
        <div className='w-full flex gap-2'>
            <Basics {...{ challenge_rating, speed, armor_class, type, size, subtype, alignment, hit_dice }} />
            <SkillMatrix {...{ strength, dexterity, constitution, intelligence, wisdom, charisma }} />
        </div>
        <h2 className='text-white text-xl font-medium'>Actions</h2>
        <div className='flex'>
     
            <Actions {...{ actions }} />
        </div>
    </div>
  )
}
