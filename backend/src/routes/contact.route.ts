import { Router } from 'express'
import { handleContactForm } from '@/controllers/contact.controller'

const contactRoutes = Router()

contactRoutes.post('/', handleContactForm)

export default contactRoutes