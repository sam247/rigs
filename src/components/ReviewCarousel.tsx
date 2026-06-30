"use client";

import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Review } from "@/content/reviews";

type ReviewCarouselProps = {
  reviews: Review[];
};

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full px-12 md:px-14">
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={`${review.name}-${review.service}`}>
            <Card className="border-2 border-border shadow-sm">
              <CardContent className="p-6 md:p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-accent text-accent" : "text-border"}`} />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-heading font-700 text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.service}</p>
                  </div>
                  <span className="text-[11px] font-heading font-700 uppercase tracking-wider text-primary/60">{review.type}</span>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 border-border bg-background hover:bg-secondary" />
      <CarouselNext className="right-0 border-border bg-background hover:bg-secondary" />
    </Carousel>
  );
}
