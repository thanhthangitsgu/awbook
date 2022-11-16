<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Publisher extends JsonResource
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
            'id_pub' => $this->id_pub,
            'name' => $this->name,
            'address' => $this->address,
            'status' => $this->status,
            'created_at' => $this->created_at->format('H:i:m d/m/Y'),
            'updated_at' => $this->updated_at->format('H:i:m d/m/Y'),
        ];
        // return parent::toArray($request);
    }
}