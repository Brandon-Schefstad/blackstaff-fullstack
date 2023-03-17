import prisma from './client'
interface CreateClass {
	name: string
}
export async function createClass(user: CreateClass) {
	return await prisma.classDescription.create({
		data: user,
	})
}
