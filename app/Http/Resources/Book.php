<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Book extends JsonResource
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
            'id' => $this->id,
            'title_id' => $this->title_id,
            'pub_id' => $this->pub_id,
            'year' => $this->year,
            'price' => $this->price,
            'amount' => $this->amount,
            'image' => $this->image,
            'describe' => $this->describe,
            'promotion_id' => $this->promotion_id,
            'status' => $this->status,
            'created_at' => $this->created_at->format('H:i:m d/m/Y'),
            'updated_at' => $this->updated_at->format('H:i:m d/m/Y'),
        ];
    }
}