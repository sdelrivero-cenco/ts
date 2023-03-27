interface Video1 {
    title: string;
    postedAt: Date;
    likes: number;
    sourceUrl(): string
}

type Video2  = {
    title: string;
    postedAt: Date;
    likes: number;
    sourceUrl(): string
}

// alias

type UserId = string;
type ProductId = string;

function updateUser(id: UserId){}

const userId: UserId = "u1"
const productId: ProductId = "p1"

updateUser( productId )

// a type cannot be changed after being created
interface Shirt {
    title: string
}
interface Shirt {
    color: string;
}

let shirt1: Shirt;
// shirt1.color

type ShirtType = {
    title: string
}

type ShirtType = {
    color: string
}

// extending a type via intersections

type Animal = {
    name: string
}

type Bear = Animal & {
    honey: boolean
}

let bear: Bear;