<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BillDetail extends JsonResource
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
            'bill_id' => $this->bill_id,
            'book_id' => $this->book_id,
            'amount' => $this->amount,
            'price' => $this->price,
            'status' => $this->status,
            'created_at' => $this->created_at->format('H:i:m d/m/Y'),
            'updated_at' => $this->updated_at->format('H:i:m d/m/Y'),
        ];
    }
}