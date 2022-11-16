<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Bill extends JsonResource
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
            'customer_id' => $this->customer_id,
            'payment_id' => $this->payment_id,
            'partner_id' => $this->partner_id,
            'ship_code' => $this->ship_code,
            'total_cost' => $this->total_cost,
            'promotion' => $this->promotion,
            'ship_charges' => $this->ship_charges,
            'status' => $this->status,
            'created_at' => $this->created_at->format('H:i:m d/m/Y'),
            'updated_at' => $this->updated_at->format('H:i:m d/m/Y'),
        ];
    }
}