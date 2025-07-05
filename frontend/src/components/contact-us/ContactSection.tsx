'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from './schema'
import type { ContactFormData } from './schema'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Send, Users, MessageSquare } from 'lucide-react'
import { api } from '@/lib/axios'
import Image from 'next/image'

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await api.post('/contact', data)
    },
    onSuccess: () => {
      toast.success('Message sent successfully!')
      reset()
    },
    onError: () => {
      toast.error('Something went wrong. Try again.')
    },
  })
  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data)
  }

  return (
    <div className="min-h-screen">
      

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Have a question about freelancing or need support? We're here to help you succeed on your journey.
            </p>
          </div>

          {/* Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Illustration */}
            <div className="flex  items-center justify-center space-y-8">
              <Image src={'/contact.png'} alt={''} width={600} height={600} />
              
              
            </div>

            {/* Right Column - Form */}
            <Card className="shadow-xl border border-transparent bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="h-12 border-muted focus:border-primary focus:ring-primary"
                        {...register('firstName')}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="h-12 border-muted focus:border-primary focus:ring-primary"
                        {...register('lastName')}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground w-5 h-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="h-12 border-muted focus:border-primary focus:ring-primary pl-10"
                        {...register('email')}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="h-12 border-muted focus:border-primary focus:ring-primary resize-none"
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || mutation.isPending}
                    className="w-full h-12  text-card font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    {isSubmitting || mutation.isPending ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-card border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}