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

    function addWildshapeToCasino({ form }) {
        fetch(`/api/casino?form=${form}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    alert(json.error)
                } else {
                    alert('Added to casino!')
                }
        })
    }

    return (
        <div className='flex justify-start items-start flex-col gap-5'>
            <div className='flex items-start justify-center gap-2'>
                <p className='font-bold text-2xl text-white'>{name}</p>
                <div onClick={() => addWildshapeToCasino({ form: name })} className='bg-black text-white p-4 rounded-xl cursor-pointer'>Add to casino</div>
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
