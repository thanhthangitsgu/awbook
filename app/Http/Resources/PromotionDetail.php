<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PromotionDetail extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'promo_id' => $this->promo_id,
            'book_id' => $this->book_id,
            'discount' => $this->discount,
            'status' => $this->status,
            'created_at' => $this->created_at->format('H:i:m d/m/Y'),
            'updated_at' => $this->updated_at->format('H:i:m d/m/Y'),
        ];
    }
}