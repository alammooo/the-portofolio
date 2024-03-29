export interface SectionInterface {
  type: string
  sub?: string
  title: string
}

export interface TypeProps {
  type:
    | "service"
    | "about"
    | "experience"
    | "project"
    | "stack"
    | "testimonial"
    | "blog"
    | "contact"
}
